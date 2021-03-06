import React from "react";
import { Card, CardContent, Typography} from "@material-ui/core";

function InfoBox({ title, cases, total }) {
    return (
        <Card> classname="infoBox"
           <CardContent>
               {/*Title i.e. Coronavirus cases*/}
               <Typography classname="infoBox_title" color="textSecondary">{title}</Typography>

               {/* +120k Number of cases */}
               <h2 className="infoBox_cases">{cases}</h2>

               {/*1.2M Total */}
               <Typography classname="infoBox_total" color="textSecondary">{total} Total</Typography>

           </CardContent>
        </Card>
    );
}

export default InfoBox;