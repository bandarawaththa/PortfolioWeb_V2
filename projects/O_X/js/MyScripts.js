var label = $('#label');
var allboxes = [$('#box1'), $('#box2'), $('#box3'), $('#box4'), $('#box5'), $('#box6'), $('#box7'), $('#box8'), $('#box9')];
var x_or_o = 0;

for (var i = 0; i < allboxes.length; i++) {
    allboxes[i].on('click', function () {
        if (this.innerHTML != "X" && this.innerHTML != "O"){
            if (x_or_o % 2 == 0){
                this.innerHTML = "X";
                label.text("O's turn");
                getWinner();
            } else {
                this.innerHTML = "O";
                label.text("X's turn");
                getWinner();
            }
            x_or_o++;
        }
    });
}

$('#playButton').on('click', function () {
    for (var i = 0; i < allboxes.length; i++) {
        allboxes[i].text("");
        allboxes[i].css({
            'background' : 'white',
            'color' : 'purple'
        });
    }
    label.text("Play");
    label.css('font-size', '25px');
    x_or_o = 0;
    label.css({
        'background' : 'purple',
        'color' : 'white'
    });
});

function getWinner() {
    var box1 = $('#box1');
    var box2 = $('#box2');
    var box3 = $('#box3');
    var box4 = $('#box4');
    var box5 = $('#box5');
    var box6 = $('#box6');
    var box7 = $('#box7');
    var box8 = $('#box8');
    var box9 = $('#box9');

    if(box1.text() != "" && box1.text() == box2.text() && box1.text() == box3.text())
        winners(box1,box2,box3);

    if(box4.text() != "" && box4.text() == box5.text() && box4.text() == box6.text())
        winners(box4,box5,box6);

    if(box7.text() != "" && box7.text() == box8.text() && box7.text() == box9.text())
        winners(box7,box8,box9);

    if(box1.text() != "" && box1.text() == box4.text() && box1.text() == box7.text())
        winners(box1,box4,box7);

    if(box2.text() != "" && box2.text() == box5.text() && box2.text() == box8.text())
        winners(box2,box5,box8);

    if(box3.text() != "" && box3.text() == box6.text() && box3.text() == box9.text())
        winners(box3,box6,box9);

    if(box1.text() != "" && box1.text() == box5.text() && box1.text() == box9.text())
        winners(box1,box5,box9);

    if(box3.text() != "" && box3.text() == box5.text() && box3.text() == box7.text())
        winners(box3,box5,box7);
}

function winners(box1, box2, box3) {
    box1.css({
        'background' : 'gold',
        'color' : 'purple'
    });
    box2.css({
        'background' : 'gold',
        'color' : 'purple'
    });
    box3.css({
        'background' : 'gold',
        'color' : 'purple'
    });
    label.text("player " + box1.text() + " won");
    label.css({
        'background' : 'gold',
        'color' : 'purple'
    });
}