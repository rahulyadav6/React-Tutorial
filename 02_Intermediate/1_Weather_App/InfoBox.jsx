import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./InfoBox.css";
// eslint-disable-next-line react/prop-types
function InfoBox({ info }) {
  return (
    <div className="infoBox">
    <div className="cardContainer">
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 140 }}
          image="https://unsplash.com/photos/a-sandy-beach-with-trees-and-rocks-vy4AvFCeOnU?utm_content=creditShareLink&utm_medium=referral&utm_source=unsplash"
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {info.city}
          </Typography>
          <Typography variant="body2" color="text.secondary" component={"span"}>
            <div>Temperature = {info.temp}&deg;C</div>
            <div>Huimidity = {info.huimidity}</div>
            <div>Min Temp = {info.tempMin}&deg;C</div>
            <div>Max Temp = {info.tempMax}&deg;C</div>
            <div>Feels like = {info.feelslike}&deg;C</div>
          </Typography>
        </CardContent>
      </Card>
      </div>
    </div>
  );
}
export default InfoBox;
