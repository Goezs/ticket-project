import "./Login.css";
import React from 'react';
import { UserProfile } from "../models/UserProfile";

const Login: React.FC = () => {
    // 1. Create instance class
    const userList: UserProfile[] = [
        new UserProfile(1, "andres", "andres@gmail.com", "Chinese Street", 
            "233042455", new Date(), false, 0
        ),
        new UserProfile(2, "Eyler", "Eyler3@gmail.com", "England", 
            "523304245", new Date(), false, 0
        ),
        new UserProfile(1, "Bejjunton", "bejjunton@gmail.com", "London", 
            "642330455", new Date(), true, 40
        ),
    ];

    return (
        <main>
            <section>
                <div className="padding"></div>
                <h2>System Users</h2>
                <table className="tableStyle" cellPadding={10}>
                    <thead>
                        <tr className="row">
                            <th>ID</th>
                            <th>Email</th>
                            <th>Residence</th>
                            <th>telephone</th>
                            <th>Date_creation</th>
                            <th>Verified user</th>
                            <th>Mean punctiation</th>
                        </tr>
                    </thead>
                    <tbody>
                        { /* 2. Map through the instanced objects */}
                        {userList.map((user) => (
                            <tr key = {user.userId}>
                                <td>{user.email}</td>
                                <td>{user.residence}</td>
                                <td>{user.telephone}</td>
                                <td>{user.register_date.toString()}</td>
                                <td>{user.certified_user}</td>
                                <td>{user.mean_punctuation}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>
        </main>

    );
};

export default Login;