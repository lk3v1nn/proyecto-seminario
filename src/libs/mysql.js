import mysql from 'serverless-mysql';

export const conn = mysql({
    config: {
        host     : 'mysql-seminario-umg-seminario.c.aivencloud.com',
        database : 'proyect-seminario',
        user     : 'avnadmin',
        password : 'AVNS_s87M_LsjYCu67eSbbLY',
        port     : 20852
      }

    //   config: {
    //     host     : process.env.ENDPOINT,
    //     database : process.env.DATABASE,
    //     user     : process.env.USERNAME,
    //     password : process.env.PASSWORD,
    //     port     : process.env.PORT
    //   }
});

