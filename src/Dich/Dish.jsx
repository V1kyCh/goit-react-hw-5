import { LuAlarmClock } from "react-icons/lu";
import { FiPieChart } from "react-icons/fi";
import { BsBarChartFill } from "react-icons/bs";

import { MainItem } from "./Dich";
import { Title } from "./Dich"
import { Img } from "./Dich"
import { DescriptionList } from "./Dich"
import { DescriptionItem } from "./Dich";
import { DifficultyList } from "./Dich";
import { DifficultyItem } from "./Dich";

export const Dish = ({ img, title, time, servings, calories, difficulty }) => {
    console.log(img, title, time, servings, calories, difficulty)
    return (
        <MainItem className={difficulty}>
            <Img src={img} alt="" />
            <Title>{title}</Title>
            <DescriptionList>
                <DescriptionItem><LuAlarmClock /> {time}</DescriptionItem>
                <DescriptionItem><FiPieChart /> {servings}</DescriptionItem>
                <DescriptionItem><BsBarChartFill />{calories}</DescriptionItem>
            </DescriptionList>
            <div>
                <h3>Difficulty</h3>
                <DifficultyList>
                    <DifficultyItem style={{ backgroundColor: difficulty === 'Easy' ? 'rgba(255, 198, 107, 0.98)' : 'rgba(255, 174, 0, 0.17)' }}>Easy</DifficultyItem>
                    <DifficultyItem style={{ backgroundColor: difficulty === 'Medium' ? 'rgba(226, 107, 16, 0.81)' : 'rgba(255, 174, 0, 0.17)' }}>Medium</DifficultyItem>
                    <DifficultyItem style={{ backgroundColor: difficulty === 'Hard' ? 'rgba(255, 34, 34, 0.66)' : 'rgba(255, 174, 0, 0.17)' }}>Hard</DifficultyItem>
                </DifficultyList>
            </div>
        </MainItem>
    )
}