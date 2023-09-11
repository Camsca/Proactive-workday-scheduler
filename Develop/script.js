// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
$(".saveBtn").on("click",function(){
  var blockId = $(this).closest (".time-block").attr("id");
   console.log("Block ID:", blockId); 
  var description = $(this).siblings(".description").val();
  localStorage.setItem(blockId, description);
});
$(".time-block").each(function () {
  var blockId = $(this).attr("id");
  var description = localStorage.getItem(blockId);
  if (description !== null) {
    $(this).find(".description").val(description);
  }
});

});

$(function(){
  //get actual hour in a 24hr format
  var currentHour = dayjs().format('H');
  
  $('.time-block').each(function(){
    var blockHour = parseInt($(this).attr('id').split('-')[1]);
    if (blockHour<currentHour){
      $(this).addClass ('past');
    }
  

  });
