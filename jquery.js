function addpoll()
{
    var que = $('#question').val();
    var op = $('#options').val();
    op = op.trim();
    var options = op.split(",");
    if(que == "")
    {
        alert("Invalid Question");
        return;
    }
    if(options.length > 4 || options.length < 2)
    {
        alert("Invalid Options");
        return;
    }

    $("#exampleModal").modal('hide');

    var txtrowdiv = "<div class='row'></div>";
    var txtcol1div = "<div class='col-md-2'></div>"
    var txtcol2div = "<div class='col-md-8'></div>"
    var txtcol3div = "<div class='col-md-2'></div>"
    var txtmaincarddiv="<div class='card'></div>";
    var txtcardheaddiv="<div class='card-header'></div>"
    var txtquep = "<p class='poll-header' style='display: inline'></p>"
    var txtcardbodydiv = "<div class='card-body'></div>"
    var txtoptbutton = "<button type='button' class='btn btn-outline-primary btn-lg btn-block option'></button>"
    var txtcardfootdiv = "<div class='card-footer text-muted'></div>"
    var txtdaysspan = "<span class='text-muted' style='float:right;'></span>"

    var quep = $(txtquep);
    quep.text(que);                             //question
    var cardheaddiv = $(txtcardheaddiv);
    cardheaddiv.append(quep);                       //card header

    var cardbodydiv = $(txtcardbodydiv);            //card body
    for(var i=0; i<options.length; i++)
    {
        var optbutton = $(txtoptbutton);            //options
        optbutton.text(options[i]);
        cardbodydiv.append(optbutton);
    }

    var cardfootdiv = $(txtcardfootdiv);
    var daysspan = $(txtdaysspan);
    daysspan.text("0 days ago");
    cardfootdiv.append(daysspan);               //card footer

    var maincarddiv = $(txtmaincarddiv);        //main card
    maincarddiv.append(cardheaddiv);
    maincarddiv.append(cardbodydiv);
    maincarddiv.append(cardfootdiv);

    var col1div = $(txtcol1div);
    var col2div = $(txtcol2div);
    var col3div = $(txtcol3div);

    col2div.append(maincarddiv);

    var rowdiv = $(txtrowdiv);              //row div
    rowdiv.append(col1div);
    rowdiv.append(col2div);
    rowdiv.append(col3div);

    $("#maincont").append(rowdiv);         //appending whole div to container

            // <div class="row">
            //     <div class="col-md-2"></div>
            //     <div class="col-md-8">
            //         <div class="card">
            //           <div class="card-header" >
            //             <p class="poll-header">2) Which is your favourite programmin language?</p>
                        
            //           </div>
            //           <div class="card-body">
            //             <button type="button" class="btn btn-outline-primary btn-lg btn-block option">C#</button>
            //             <button type="button" class="btn btn-outline-primary btn-lg btn-block option">C</button>
            //             <button type="button" class="btn btn-outline-primary btn-lg btn-block option">JAVA</button>
            //             <button type="button" class="btn btn-outline-primary btn-lg btn-block option">Python</button>
            //           </div>
            //           <div class="card-footer text-muted">
            //             <span class="text-muted" style="float:right;">0 days ago</span>
            //           </div>
            //         </div>
            //     </div>
            //     <div class="col-md-2"></div>
            // </div>
}

function clearModal(){
    $('#question').val("");
    $('#options').val("");
}