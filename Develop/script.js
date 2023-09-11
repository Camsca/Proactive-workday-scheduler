
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
  
  //iterate throuhgh the time blocks and aplly the appropriate classes
  $('.time-block').each(function(){
    var blockHour = parseInt($(this).attr('id').split('-')[1]);
    if (blockHour<currentHour){
      $(this).addClass ('past');
    } else if (blockHour === currentHour){
      $(this).addClass ('present');
    }else {
      $(this).addClass('future');
    }
    
    
  });
});

// Get the current date and display it in the header
 var currentDate = dayjs().format('MMMM D , YYYY');
 $('#currentDay').text(currentDate);
//