 var tree_values = [];

 var stage = new Kinetic.Stage({
     container: 'container',
     width: 500,
     height: 500
 });

 var layer = new Kinetic.Layer();

 var rect = new Kinetic.Rect({
     x: 0,
     y: 0,
     width: 500,
     height: 500,
     fill: '#dadada',
     stroke: 'white',
     strokeWidth: 4
 });


 var root_group = new Kinetic.Group({
     x: stage.width() / 2,
     y: 50
 });

 var root_val = rvalue();
 var root_value = new Kinetic.Text({
     x: -5,
     y: 0,
     text: root_val,
     fontSize: "14px",
     fontFamily: 'Calibri',
     fill: 'white'
 });

 var root = new Kinetic.Circle({
     x: 0,
     y: 0,
     radius: 11,
     fill: '#' + Math.floor(Math.random() * 16777215).toString(16),
     stroke: 'black',
     strokeWidth: 1,
 });

 root_group.add(root);
 root_group.add(root_value);

 root_group.setAttr('node', new node(root_val));
 //click_handler = new listener();
 root_group.on('click', handle_);

 root_group.on('mouseover', function () {
     document.body.style.cursor = 'pointer';
 });

 root_group.on('mouseout', function () {
     document.body.style.cursor = 'default';
 });


 layer.add(rect);
 layer.add(root_group);




 // add the layer to the stage
 stage.add(layer);

 update_order();


 function rvalue() {

     var num = 0;
     var notfound = true;
     while(notfound){
        num = Math.floor(Math.random() * 99);
         if (!(num in tree_values)){
            tree_values.push(num);
            notfound= false;
         }

     }
     return num.toString();
 }

 function handle_(e){


    
    node_click_handler(e,this.attrs.node);
    update_order();
    
 }

 function node_click_handler(e,g) {
    
     var parent_node = g;
     
     x1 = e.target.parent.getPosition().x;
     y1 = e.target.parent.getPosition().y;
     
     if (parent_node.right == undefined) {

         var edge = new Kinetic.Line({
             points: [5, 5, -33.5, -33.5],
             stroke: 'black',
             strokeWidth: 2,
             lineCap: 'round',
             lineJoin: 'round'
         });

          var node_val = rvalue();
         var child_node_right = new node(node_val);
         parent_node.right = child_node_right;

         var group = new Kinetic.Group({
             x: x1 + 40,
             y: y1 + 40
         });

         var simpleText = new Kinetic.Text({
             x: -5,
             y: 0,
             text: node_val,
             fontSize: "14px",
             fontFamily: 'Calibri',
             fill: 'white'
         });

         var circle = new Kinetic.Circle({
             x: 0,
             y: 0,
             radius: 11,
             fill: '#' + Math.floor(Math.random() * 16777215).toString(16),
             stroke: 'black',
             strokeWidth: 1,
         });

         group.add(edge);
         group.add(circle);
         group.add(simpleText);

         group.setAttr('node', parent_node.right);

         // add cursor styling
         group.on('mouseover', function () {
             document.body.style.cursor = 'pointer';
         });

         group.on('mouseout', function () {
             document.body.style.cursor = 'default';
         });

         group.on('click', handle_);

         layer.add(group);

         layer.batchDraw();

         return;
     }

     if (parent_node.left == undefined) {


         var node_val = rvalue();
         var child_node_left = new node(node_val);
         parent_node.left = child_node_left;


         var edge = new Kinetic.Line({
             points: [5, 5, 33.5, -33.5],
             stroke: 'black',
             strokeWidth: 2,
             lineCap: 'round',
             lineJoin: 'round'
         });


         var group = new Kinetic.Group({
             x: x1 - 40,
             y: y1 + 40
         })

         var simpleText = new Kinetic.Text({
             x: -5,
             y: 0,
             text: node_val,
             fontSize: "14px",
             fontFamily: 'Calibri',
             fill: 'white'
         });

         var circle = new Kinetic.Circle({
             x: 0,
             y: 0,
             radius: 11,
             fill: '#' + Math.floor(Math.random() * 16777215).toString(16),
             stroke: 'black',
             strokeWidth: 1,
         });

         group.add(edge);
         group.add(circle);
         group.add(simpleText);

         group.setAttr('node',parent_node.left);

         // add cursor styling
         group.on('mouseover', function () {
             document.body.style.cursor = 'pointer';
         });
         group.on('mouseout', function () {
             document.body.style.cursor = 'default';
         });

         

         group.on('click',handle_);



         layer.add(group);

         layer.batchDraw();

        

         return;
     }

 }

 function update_order(){

    preorder= [];
    postorder = [];
    inorder= [];
   

    show_tree_preorder(root_group.attrs.node);
    show_tree_postorder(root_group.attrs.node);
    show_tree_inorder(root_group.attrs.node);
    update_status();

 }

 function update_status(){

   document.getElementById("recorrido_preorden").innerHTML = preorder.join();
   document.getElementById("recorrido_inorden").innerHTML = inorder.join();
   document.getElementById("recorrido_postorden").innerHTML = postorder.join();

 }

