const Skills = (props) => {
    const logoSize = 100;

    return(
        <div id= "skills">
            <h2>Programming Languages + Tools</h2>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg" height={logoSize} />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" height={logoSize}/>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain.svg" height={logoSize}/>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" height={logoSize}/>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" height={logoSize}/>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" height={logoSize}/>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" height={logoSize}/>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" height={logoSize}/>
        </div>
    );
}

export default Skills;