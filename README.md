# Mileage Tracker
A headless Drupal 8 - AngularJS mileage tracker


## Setup

Install D8 and enable following modules
* hal
* rest
* serialization
* basic auth

To avoid database deadlocks when using mysql, use mysql >= 5.5 and add following line to your settings.php
$databases['default']['default']['init_commands'] = array(
  'isolation' => "SET SESSION tx_isolation='READ-COMMITTED'"
);





## Copyright
Created by Jimmy Henderickx (StryKaizer)
Feel free to adjust.