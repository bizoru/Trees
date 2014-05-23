

example = {};

fixture();

function fixture(){

   example = new node("root",new node("child right",new node("child right from right")),new node("child left"));

}


function fixture2(){

	example = { value: "2", 
	            right: { value: "5",
                         right: { value: "9",
                                  left : { value: "4"}
                                 }
	                    }, 
	            left: { value: "7",
	                    left: { value: "2"},
	                    right: { value: "6",
                                 right: {value: "11"},
                                 left: { value: "5"}
                                 
	                           }


	                  } 

	        }
}
// Node description
function node(value,right,left){

     this.value = value;
     this.right = right;
     this.left = left;

}

function test(){


	console.log(arguments);
	console.log(arguments.length);
}

// Possibly pre order
preorder= [];
postorder = [];
inorder= [];



function show_tree_preorder(tree){

	if(tree instanceof Object){
	
		preorder.push(tree.value);
		
		if(tree.left != undefined){
          show_tree_preorder(tree.left);
		}
		if(tree.right != undefined){
          show_tree_preorder(tree.right);
		}
	}
}	

function show_tree_postorder(tree){

	if(tree instanceof Object){
		
		
		
		if(tree.left != undefined){
          show_tree_postorder(tree.left);
		}
		if(tree.right != undefined){
          show_tree_postorder(tree.right);
		}

		
		postorder.push(tree.value);
	}
}	


function show_tree_inorder(tree){

	if(tree instanceof Object){
		
		
		
		if(tree.left != undefined){
          show_tree_inorder(tree.left);
		}

		inorder.push(tree.value);

		if(tree.right != undefined){
          show_tree_inorder(tree.right);
		}

	}
}	


