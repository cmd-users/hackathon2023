// @generated automatically by Diesel CLI.

diesel::table! {
    example_table (id) {
        id -> Int4,
        name -> Varchar,
        age -> Int4,
    }
}

diesel::table! {
    teste_table (id) {
        id -> Int4,
    }
}

diesel::allow_tables_to_appear_in_same_query!(
    example_table,
    teste_table,
);
