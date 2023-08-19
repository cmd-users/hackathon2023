use diesel::prelude::*;

#[derive(Queryable)]
#[diesel(table_name = teste_table)]
pub struct Teste {
    pub id: i32,
}

