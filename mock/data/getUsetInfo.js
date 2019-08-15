module.exports = {
  code:0,
  message:"success",
  data:{
    name:"@cname",
    mobile:/^1[35789]\d{9}$/,
    "age|+1": 1,
    "orders|4":[
      {
        catelog:{
          "ageLimit|+1":[0,12,15,18],
          "genre|1":["Open word","Advantage","Action","RPG"],
          level:"AAA",
          VR:"false"
        },
        id:"@id",
        from: "@county(false)",
        to: "@county(false)",
        url:"@url",
        domain:"@domain",
        title:"@title",
        paragraph:"@paragraph",
        csentence:"@sentence"
      }
    ]
  }
}