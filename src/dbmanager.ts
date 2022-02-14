
/*function test() {
    console.log("testdb");
}

export function test2() {
    console.log("testdb2");
}

export default test;*/
//////////////////////////
import * as oracledb from 'oracledb';

/*async function getData() { // QUITAR DATOS PRIVADOS!!!!!!!!!!!!!!

    let pool;
    let connectionDB = "(DESCRIPTION =(ADDRESS = (PROTOCOL = TCP)(HOST = EXPH19OEE)(PORT = 1521))(CONNECT_DATA =(SID= ORCL)))";
    try {
        pool = await oracledb.createPool({
            user: "LIVE2637TST", password: "XFP", // mypw contains the hr schema password
            connectString: connectionDB,
        });

        let connection;
        let result;
        try {
            connection = await pool.getConnection();
            result = await connection.execute(`select * from xsentences fetch first rows only`);
            console.log("Result is: ", result);

            const rs = result.resultSet;
            let row;        
            while ((row = await rs.getRow())) {
                console.log(row);
            }
        
            await rs.close();
        } catch (err) {
            throw(err);
        } finally {
            if (connection) {
                try {
                    await connection.close(); // Put the connection back in the pool
                } catch (err) {
                    throw(err);
                }
            }
        }
    } catch (err) {
        console.error(err.message);
    } finally {
        await pool.close();
    }

}

export default getData;


/*    

  let connection;

  try {
connection = await oracledb.getConnection(
        { user: "LIVE2637TST",
         password: "XFP",
         connectionString: "localhost/xepdb1" });

    console.log("Successfully connected to Oracle Database");

    // Create a table

    await connection.execute(`begin
                                execute immediate 'drop table todoitem';
                                exception when others then if sqlcode <> -942 then raise; end if;
                              end;`);

    await connection.execute(`create table todoitem (
                                id number generated always as identity,
                                description varchar2(4000),
                                creation_ts timestamp with time zone default current_timestamp,
                                done number(1,0),
                                primary key (id))`);

    // Insert some data

    const sql = `insert into todoitem (description, done) values(:1, :2)`;

    const rows =
          [ ["Task 1", 0 ],
            ["Task 2", 0 ],
            ["Task 3", 1 ],
            ["Task 4", 0 ],
            ["Task 5", 1 ] ];

    let result = await connection.executeMany(sql, rows);

    console.log(result.rowsAffected, "Rows Inserted");

    connection.commit();

    // Now query the rows back
    let result = await connection.execute(
      `select * from xsentences fetch first rows only`,
      [],
      { resultSet: true, outFormat: oracledb.OUT_FORMAT_OBJECT });

    const rs = result.resultSet;
    let row;

    while ((row = await rs.getRow())) {
      /*if (row.DONE)
        console.log(row.DESCRIPTION, "is done");
      else
        console.log(row.DESCRIPTION, "is NOT done");
        console.log(row);
    }

    await rs.close();

  } catch (err) {
    console.error(err);
  } finally {
    if (connection) {
      try {
        await connection.close();
      } catch (err) {
        console.error(err);
      }
    }
  }*/

  export default null;