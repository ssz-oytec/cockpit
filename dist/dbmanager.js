/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!**************************!*\
  !*** ./src/dbmanager.ts ***!
  \**************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (null);

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGJtYW5hZ2VyLmpzIiwibWFwcGluZ3MiOiI7O1VBQUE7VUFDQTs7Ozs7V0NEQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTkEsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0EsOENBQThDO0FBQzlDLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0EsK0NBQStDO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEZBQTBGO0FBQzFGLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSx3REFBd0Q7QUFDaEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILGlFQUFlLElBQUksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2NvY2twaXQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vY29ja3BpdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vY29ja3BpdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2NvY2twaXQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9jb2NrcGl0Ly4vc3JjL2RibWFuYWdlci50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgcmVxdWlyZSBzY29wZVxudmFyIF9fd2VicGFja19yZXF1aXJlX18gPSB7fTtcblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8qYXN5bmMgZnVuY3Rpb24gZ2V0RGF0YSgpIHsgLy8gUVVJVEFSIERBVE9TIFBSSVZBRE9TISEhISEhISEhISEhISFcclxuXHJcbiAgICBsZXQgcG9vbDtcclxuICAgIGxldCBjb25uZWN0aW9uREIgPSBcIihERVNDUklQVElPTiA9KEFERFJFU1MgPSAoUFJPVE9DT0wgPSBUQ1ApKEhPU1QgPSBFWFBIMTlPRUUpKFBPUlQgPSAxNTIxKSkoQ09OTkVDVF9EQVRBID0oU0lEPSBPUkNMKSkpXCI7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHBvb2wgPSBhd2FpdCBvcmFjbGVkYi5jcmVhdGVQb29sKHtcclxuICAgICAgICAgICAgdXNlcjogXCJMSVZFMjYzN1RTVFwiLCBwYXNzd29yZDogXCJYRlBcIiwgLy8gbXlwdyBjb250YWlucyB0aGUgaHIgc2NoZW1hIHBhc3N3b3JkXHJcbiAgICAgICAgICAgIGNvbm5lY3RTdHJpbmc6IGNvbm5lY3Rpb25EQixcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgbGV0IGNvbm5lY3Rpb247XHJcbiAgICAgICAgbGV0IHJlc3VsdDtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25uZWN0aW9uID0gYXdhaXQgcG9vbC5nZXRDb25uZWN0aW9uKCk7XHJcbiAgICAgICAgICAgIHJlc3VsdCA9IGF3YWl0IGNvbm5lY3Rpb24uZXhlY3V0ZShgc2VsZWN0ICogZnJvbSB4c2VudGVuY2VzIGZldGNoIGZpcnN0IHJvd3Mgb25seWApO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlJlc3VsdCBpczogXCIsIHJlc3VsdCk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBycyA9IHJlc3VsdC5yZXN1bHRTZXQ7XHJcbiAgICAgICAgICAgIGxldCByb3c7XHJcbiAgICAgICAgICAgIHdoaWxlICgocm93ID0gYXdhaXQgcnMuZ2V0Um93KCkpKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyb3cpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIGF3YWl0IHJzLmNsb3NlKCk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgIHRocm93KGVycik7XHJcbiAgICAgICAgfSBmaW5hbGx5IHtcclxuICAgICAgICAgICAgaWYgKGNvbm5lY3Rpb24pIHtcclxuICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgY29ubmVjdGlvbi5jbG9zZSgpOyAvLyBQdXQgdGhlIGNvbm5lY3Rpb24gYmFjayBpbiB0aGUgcG9vbFxyXG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhyb3coZXJyKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyLm1lc3NhZ2UpO1xyXG4gICAgfSBmaW5hbGx5IHtcclxuICAgICAgICBhd2FpdCBwb29sLmNsb3NlKCk7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBnZXREYXRhO1xyXG5cclxuXHJcbi8qXHJcblxyXG4gIGxldCBjb25uZWN0aW9uO1xyXG5cclxuICB0cnkge1xyXG5jb25uZWN0aW9uID0gYXdhaXQgb3JhY2xlZGIuZ2V0Q29ubmVjdGlvbihcclxuICAgICAgICB7IHVzZXI6IFwiTElWRTI2MzdUU1RcIixcclxuICAgICAgICAgcGFzc3dvcmQ6IFwiWEZQXCIsXHJcbiAgICAgICAgIGNvbm5lY3Rpb25TdHJpbmc6IFwibG9jYWxob3N0L3hlcGRiMVwiIH0pO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKFwiU3VjY2Vzc2Z1bGx5IGNvbm5lY3RlZCB0byBPcmFjbGUgRGF0YWJhc2VcIik7XHJcblxyXG4gICAgLy8gQ3JlYXRlIGEgdGFibGVcclxuXHJcbiAgICBhd2FpdCBjb25uZWN0aW9uLmV4ZWN1dGUoYGJlZ2luXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhlY3V0ZSBpbW1lZGlhdGUgJ2Ryb3AgdGFibGUgdG9kb2l0ZW0nO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4Y2VwdGlvbiB3aGVuIG90aGVycyB0aGVuIGlmIHNxbGNvZGUgPD4gLTk0MiB0aGVuIHJhaXNlOyBlbmQgaWY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuZDtgKTtcclxuXHJcbiAgICBhd2FpdCBjb25uZWN0aW9uLmV4ZWN1dGUoYGNyZWF0ZSB0YWJsZSB0b2RvaXRlbSAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQgbnVtYmVyIGdlbmVyYXRlZCBhbHdheXMgYXMgaWRlbnRpdHksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb24gdmFyY2hhcjIoNDAwMCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3JlYXRpb25fdHMgdGltZXN0YW1wIHdpdGggdGltZSB6b25lIGRlZmF1bHQgY3VycmVudF90aW1lc3RhbXAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9uZSBudW1iZXIoMSwwKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmltYXJ5IGtleSAoaWQpKWApO1xyXG5cclxuICAgIC8vIEluc2VydCBzb21lIGRhdGFcclxuXHJcbiAgICBjb25zdCBzcWwgPSBgaW5zZXJ0IGludG8gdG9kb2l0ZW0gKGRlc2NyaXB0aW9uLCBkb25lKSB2YWx1ZXMoOjEsIDoyKWA7XHJcblxyXG4gICAgY29uc3Qgcm93cyA9XHJcbiAgICAgICAgICBbIFtcIlRhc2sgMVwiLCAwIF0sXHJcbiAgICAgICAgICAgIFtcIlRhc2sgMlwiLCAwIF0sXHJcbiAgICAgICAgICAgIFtcIlRhc2sgM1wiLCAxIF0sXHJcbiAgICAgICAgICAgIFtcIlRhc2sgNFwiLCAwIF0sXHJcbiAgICAgICAgICAgIFtcIlRhc2sgNVwiLCAxIF0gXTtcclxuXHJcbiAgICBsZXQgcmVzdWx0ID0gYXdhaXQgY29ubmVjdGlvbi5leGVjdXRlTWFueShzcWwsIHJvd3MpO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKHJlc3VsdC5yb3dzQWZmZWN0ZWQsIFwiUm93cyBJbnNlcnRlZFwiKTtcclxuXHJcbiAgICBjb25uZWN0aW9uLmNvbW1pdCgpO1xyXG5cclxuICAgIC8vIE5vdyBxdWVyeSB0aGUgcm93cyBiYWNrXHJcbiAgICBsZXQgcmVzdWx0ID0gYXdhaXQgY29ubmVjdGlvbi5leGVjdXRlKFxyXG4gICAgICBgc2VsZWN0ICogZnJvbSB4c2VudGVuY2VzIGZldGNoIGZpcnN0IHJvd3Mgb25seWAsXHJcbiAgICAgIFtdLFxyXG4gICAgICB7IHJlc3VsdFNldDogdHJ1ZSwgb3V0Rm9ybWF0OiBvcmFjbGVkYi5PVVRfRk9STUFUX09CSkVDVCB9KTtcclxuXHJcbiAgICBjb25zdCBycyA9IHJlc3VsdC5yZXN1bHRTZXQ7XHJcbiAgICBsZXQgcm93O1xyXG5cclxuICAgIHdoaWxlICgocm93ID0gYXdhaXQgcnMuZ2V0Um93KCkpKSB7XHJcbiAgICAgIC8qaWYgKHJvdy5ET05FKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKHJvdy5ERVNDUklQVElPTiwgXCJpcyBkb25lXCIpO1xyXG4gICAgICBlbHNlXHJcbiAgICAgICAgY29uc29sZS5sb2cocm93LkRFU0NSSVBUSU9OLCBcImlzIE5PVCBkb25lXCIpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJvdyk7XHJcbiAgICB9XHJcblxyXG4gICAgYXdhaXQgcnMuY2xvc2UoKTtcclxuXHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgfSBmaW5hbGx5IHtcclxuICAgIGlmIChjb25uZWN0aW9uKSB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgYXdhaXQgY29ubmVjdGlvbi5jbG9zZSgpO1xyXG4gICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9Ki9cclxuZXhwb3J0IGRlZmF1bHQgbnVsbDtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9