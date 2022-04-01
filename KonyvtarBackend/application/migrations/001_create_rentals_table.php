<?php

defined('BASEPATH') or exit('No direct script access allowed');

class Migration_Create_Rentals_Table extends CI_Migration
{

	public function __construct()
	{
		$this->load->dbforge();
	}

	public function up()
	{
		$this->dbforge->add_field([
			'id' => [
				'type' => 'BIGINT',
				'unsigned' => true,
				'auto_increment' => true,
			],
			'book_id' => [
				'type' => 'BIGINT',
				'unsigned' => true,
			],
			'start_date' => [
				'type' => 'DATE'
			],
			'end_date' => [
				'type' => 'DATE',
			],

		]);
		$this->dbforge->add_key('id', TRUE);
		$this->dbforge->add_field('CONSTRAINT FOREIGN KEY (book_id) REFERENCES books(id)');
		$this->dbforge->create_table('rentals');
	}

	public function down()
	{
		$this->dbforge->drop_table('rentals');
	}
}
