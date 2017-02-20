import EmberUploader from 'ember-uploader';

export default EmberUploader.FileField.extend({
  filesDidChange: function(files) {
    const uploader = EmberUploader.Uploader.create({
      url: this.get('url'),
      paramName: 'file'
    });

    //if (!Ember.isEmpty(files)) {
      // this second argument is optional and can to be sent as extra data with the upload
      uploader.upload(files[0]).then(data => {
        console.log(data);
      }, error => {
        console.log(data);
      })
      console.log("sent");
    //}

    uploader.on('didUpload', e => {
      // Handle finished upload
      console.log("finished");
    });

    uploader.on('didError', (jqXHR, textStatus, errorThrown) => {
      console.log(textStatus);
      console.log(errorThrown);
    });
  }
});
