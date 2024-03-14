import {
    Card,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";

export default function CharacterCard(props) {
    return (
        <Card className="mt-6 w-96">
            <CardBody>
                <Typography variant="h5" color="blue-gray" className="mb-2">
                    Name: {props.name}
                </Typography>
                <Typography>
                    Class: {props.class}
                </Typography>
                <Typography>
                    Race: {props.race}
                </Typography>
                <Typography>
                    Level: {props.level}
                </Typography>
                <Typography>
                    Alignment: {props.alignment}
                </Typography>
                <Typography>
                    Background: {props.background}
                </Typography>
                <Typography>
                    Strength: {props.strength}
                </Typography>
                <Typography>
                    Dexterity: {props.dexterity}
                </Typography>
                <Typography>
                    Constitution: {props.constitution}
                </Typography>
                <Typography>
                    Intelligence: {props.intelligence}
                </Typography>
                <Typography>
                    Wisdom: {props.wisdom}
                </Typography>
                <Typography>
                    Charisma: {props.charisma}
                </Typography>
            </CardBody>
            <CardFooter className="pt-0">
                <Button>Read More</Button>
            </CardFooter>
        </Card>
    );
}