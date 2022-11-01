curr_date = $$(date +"%Y%m%d%H%M%S")
migration_stub_location = './src/stubs/migration'
migration_folder = './src/migrations/'
new_migration_filename = migration_${curr_date}

help:
	@echo "Pass a target"

make_migration:
	@echo "Creating migration:" $(curr_date)
	cat ${migration_stub_location} > ${migration_folder}${new_migration_filename}'.js'
	sed -i "s/{{ class }}/${new_migration_filename}/g" ${migration_folder}${new_migration_filename}'.js'