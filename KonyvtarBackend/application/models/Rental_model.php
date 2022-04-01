<?php

defined('BASEPATH') or exit('No direct script access allowed');

class Rental_model extends CI_Model
{

	public function __construct()
	{
		parent::__construct();
		$this->load->database();
	}

	public function insert($data)
	{
		$this->db->insert('rentals', $data);
		return $this->db->insert_id();
	}

	public function find_if_conflict($id, $date)
	{
		$this->db->where('book_id', $id);
		$this->db->where('start_date <=', $date);
		$this->db->where('end_date >', $date);
		return !empty($this->db->get('rentals')->result_array());
	}
}

/* End of file Book_model.php */
