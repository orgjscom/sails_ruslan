module.exports = {

  createVideo: function (req, res) {
    Video.create(
        {
          en : {
            title : req.param('title')
            //description : req.param('description'),
            //author : req.param('author'),
            //keywords : req.param('keywords'),
            //link : req.param('link')
          },
          ru : {
            title : req.param('title')
            //description : req.param('description'),
            //author : req.param('author'),
            //keywords : req.param('keywords'),
            //link : req.param('link')
          }
        }
        ,
        function (err, obj) {

          if (err) console.error(err);


          //return res.json({
          //  title: obj.title,
          //  description: obj.description
          //
          //});
        }
    );
  },


  /**
   * `VideoController.show()`
   */
  showVideoList: function (req, res){

  },
  showVideoItem: function (req, res){

    var id = req.param("id");


    Video.find( {


      id :  id


    }, function(err, obj){

      if (err) console.error(err);


      console.log("showVideoItem/:id", obj);
      return res.json({
        sasa: obj
      });
    });

  }


//,
///**
// * `VideoController.edit()`
// */
//edit: function (req, res) {
//  return res.json({
//    todo: 'edit() is not implemented yet!'
//  });
//},
//
//
///**
// * `VideoController.delete()`
// */
//delete: function (req, res) {
//  return res.json({
//    todo: 'delete() is not implemented yet!'
//  });
//}
};

