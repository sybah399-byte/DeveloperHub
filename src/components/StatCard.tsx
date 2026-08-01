type Props = {
    title:string;
    value:string;
    icon:string;
};


export default function StatCard({title,value,icon}:Props){

    return(
        <div className="stat-card">

            <div className="stat-icon">
                {icon}
            </div>

            <div>
                <h3>{value}</h3>
                <p>{title}</p>
            </div>

        </div>
    );

}