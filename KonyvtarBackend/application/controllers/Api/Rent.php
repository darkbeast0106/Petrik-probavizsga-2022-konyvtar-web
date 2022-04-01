<?php

defined('BASEPATH') or exit('No direct script access allowed');

require(APPPATH . 'libraries/REST_Controller.php');

class Rent extends REST_Controller
{

	function __construct()
	{
		parent::__construct();
		$this->load->model('book_model');
		$this->load->model('rental_model');
	}

	public function index_post($id)
	{
		if (empty($this->book_model->find($id))) {
			$message = "A megadott azonosítóval nem található könyv";
			$this->response(['message' => $message], 404);
			return;
		}
		$conflict = $this->rental_model->find_if_conflict($id, date('Y-m-d'));
		if ($conflict) {
			$message = "A megadott könyv ki van kölcsönözve";
			$this->response(['message' => $message], 409);
			return;
		}
		$data = [];
		$data['start_date'] = date('Y-m-d');
		$data['end_date'] = date('Y-m-d', strtotime('+1 week'));
		$data['book_id'] = $id;
		$data['id'] = $this->rental_model->insert($data);
		$this->response($data, 200);
	}
}
/** End of file Rent.php **/
