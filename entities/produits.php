<?PHP
class Produit
{
	private $id;
	private $image;
	private $prix;

	function __construct($id,$image,$prix)

{
		$this->id=$id;
		$this->image=$image;
		$this->prix=$prix;
}
	
	function get_id(){
		return $this->id;
	}
	function get_image()
	{
		return $this->image;
	}
	function get_prix(){
		return $this->prix;
	}
	

	function set_id($id){
		$this->id=$id;
	}
	function set_image($image){
		$this->image=$image;
	}
	function set_prix($prix){
		$this->prix=$prix;
	}	
}

?>