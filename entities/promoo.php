<?PHP
class promo{
	private $idP;
	private $dd;
	private $df;
	private $prom;
	private $id;

	function __construct($idP,$dd,$df,$prom, $id){
		$this->idP=$idP;
		$this->dd=$dd;
		$this->df=$df;
		$this->prom=$prom;
		$this->id=$id;
	}
	
	function get_id(){
		return $this->id;
	}
	function get_idP(){
		return $this->idP;
	}
	function get_dd(){
		return $this->dd;
	}
	function get_df(){
		return $this->df;
	}
	function get_prom(){
		return $this->prom;
	}

	function set_id($id){
		$this->id=$id;
	}
	function set_dd($dd){
		$this->dd=$dd;
	}
	function set_df($df){
		$this->df;
	}
	function set_prom($prom){
		$this->prom=$prom;
	}

	function set_idP($idP){
		$this->idP=$idP;
	}

	
}

?>