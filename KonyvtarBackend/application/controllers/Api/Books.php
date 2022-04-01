<?php

defined('BASEPATH') or exit('No direct script access allowed');

require(APPPATH . 'libraries/REST_Controller.php');

class Books extends REST_Controller
{
	function __construct()
	{
		parent::__construct();
		$this->load->model('book_model');
	}

	public function index_get()
	{
		$books = $this->book_model->all();
		$data['data'] = $books;
		$this->response($data, 200);
	}

	public function index_post()
	{
		$this->load->library('form_validation');
		$this->form_validation->set_data($this->post());
		$this->form_validation->set_rules('title', 'Title', 'trim|required');
		$this->form_validation->set_rules('author', 'Author', 'trim|required');
		$this->form_validation->set_rules('publish_year', 'Publish Year', 'trim|required|integer|greater_than[0]');
		$this->form_validation->set_rules('page_count', 'Page Count', 'trim|required|integer|greater_than[0]');
		if (!$this->form_validation->run()) {
			$message = validation_errors();
			$message = str_replace('<p>', '', $message);
			$message = str_replace('</p>', '', $message);
			$message = str_replace("\n", ' ', $message);
			$this->response(['message' => $message], REST_Controller::HTTP_BAD_REQUEST);
		} else {
			$data = [];
			$data['title'] = $this->post('title');
			$data['author'] = $this->post('author');
			$data['publish_year'] = $this->post('publish_year');
			$data['page_count'] = $this->post('page_count');
			$data['id'] = $this->book_model->insert($data);
			$this->response($data, REST_Controller::HTTP_CREATED);
		}
	}
}
/** End of file Books.php **/
