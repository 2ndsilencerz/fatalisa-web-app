import {JSX} from "react";

export default function praySchedule(): JSX.Element {
    return (
        <div className={"justify-content-center"}>
            <title>Pray Schedule</title>
            <h1 className={"text-center"}>
                Pray Schedule
            </h1>
            <div className={"container-fluid pt-3 justify-content-center"}>
                <form className="d-flex" role="search">
                    <div className={"h3"}>City</div>
                    <div className={"ps-3 pe-3"}>
                        <input className="form-control" type="search" placeholder="Jakarta" aria-label="Search"/>
                    </div>
                    <div>
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </div>
                </form>
            </div>

            <div className={"container-fluid pt-3 justify-content-center"}>
                <table className={"table table-bordered table-striped"}>
                    <thead>
                        <tr>
                            <td>Schedule</td>
                            <td>Time</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Subuh</td>
                            <td>??:??</td>
                        </tr>
                        <tr>
                            <td>Dzuhur</td>
                            <td>??:??</td>
                        </tr>
                        <tr>
                            <td>Ashar</td>
                            <td>??:??</td>
                        </tr>
                        <tr>
                            <td>Maghrib</td>
                            <td>??:??</td>
                        </tr>
                        <tr>
                            <td>Isya</td>
                            <td>??:??</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}