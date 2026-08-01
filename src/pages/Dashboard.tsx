import StatCard from "../components/StatCard";
import "../styles/dashboard.css";


export default function Dashboard(){

    return (

        <div>

            <h1>
                Developer Hub Dashboard
            </h1>


            <div className="dashboard-grid">


                <StatCard
                    icon="📁"
                    title="Projects"
                    value="2"
                />


                <StatCard
                    icon="⚙️"
                    title="Automation Tasks"
                    value="12"
                />


                <StatCard
                    icon="🤖"
                    title="AI Tools"
                    value="5"
                />


            </div>


        </div>

    );

}