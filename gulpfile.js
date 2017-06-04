const gulp = require('gulp'),
      fs = require('fs'),
      contentful = require('contentful'),
      SPACE_ID = '4bfme0qry1sf',
      ACCESS_TOKEN = '87b291853592493032ed043722c08071bab837cec4ca251c65227a5e66ab86e7',
      SAVED_DB_FILE = './src/db/contentfulContent.json';




const folder = {
  src: 'src/'
}

gulp.task('sync-contentful', () => {
  const client = createClient();
  let db, token, syncPromise;

  fs.readFile(SAVED_DB_FILE, function(err, data) {
    if(err) {
      return console.error(err);
    }

    db = JSON.parse(data);
    token = db.nextSyncToken;

    if(token) {
      syncPromise = client.sync({
        nextSyncToken: token
      });
    } else {
      syncPromise = client.sync({
        initial: true
      });
    }

    syncPromise.then((response) => {
      const writeableData = JSON.stringify(response);

      fs.writeFile(SAVED_DB_FILE, writeableData,  function(err) {
         if (err) { return console.error(err); }

         console.log("Data written successfully!");
      });

      fs.writeFile()

    });

  });
});

function createClient() {
  const client = contentful.createClient({
    space: SPACE_ID,
    accessToken: ACCESS_TOKEN
  });

  return client;
}
