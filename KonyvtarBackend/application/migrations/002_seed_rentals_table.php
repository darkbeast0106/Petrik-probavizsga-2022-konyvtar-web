<?php

defined('BASEPATH') or exit('No direct script access allowed');

class Migration_Seed_Rentals_Table extends CI_Migration
{
	public function __construct()
	{
		$this->load->database();
		$this->faker = Faker\Factory::create();
	}

	public function up()
	{
		$books = $this->db->get('books')->result_array();
		$book_ids = [];
		foreach ($books as $book) {
			$book_ids[] = $book['id'];
		}
		for ($i=0; $i < 15; $i++) { 
			$book_id = $this->faker->randomElement($book_ids);
			$start_date = $this->faker->date();
			$end_date = date('Y-m-d', strtotime($start_date . ' +1 week'));
			$rental = [
				'book_id' => $book_id,
				'start_date' => $start_date,
				'end_date' => $end_date,
			];
			$this->db->insert('rentals', $rental);
		}
	}

	public function down()
	{
		$this->db->truncate();
	}
}
