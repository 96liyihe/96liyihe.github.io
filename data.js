const data = {
    title: 'This is my blog',
};
$("#nav").load(function(){
    $("#nav").text(data.title);
  });