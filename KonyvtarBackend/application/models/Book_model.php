<?php

defined('BASEPATH') or exit('No direct script access allowed');

class Book_model extends CI_Model
{
	
	public function __construct()
	{
		parent::__construct();
		$this->load->database();
	}
	
	public function all()
	{
		$this->db->select('id, title, author, publish_year, page_count');
		return $this->db->get('books')->result_array();
	}

	public function insert($data)
	{
		$this->db->insert('books', $data);
		return $this->db->insert_id();
	}

	public function find($id)
	{
		$this->db->where('id', $id);
		return $this->db->get('books')->row_array();
	}
}

/* End of file Book_model.php */
