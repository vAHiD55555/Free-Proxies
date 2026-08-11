function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 145.241.233.71:1080",
        "SOCKS 58.186.168.155:1106",
        "SOCKS 178.208.66.47:8051",
        "SOCKS 161.49.116.131:1338",
        "SOCKS 163.61.70.4:9000",
        "SOCKS 58.186.168.155:1117",
        "SOCKS 223.25.109.74:8199",
        "SOCKS 177.5.74.74:1080",
        "SOCKS 58.186.168.155:1105",
        "SOCKS 5.255.103.55:1080",
        "SOCKS 92.205.186.129:1080",
        "SOCKS 37.220.84.231:28016",
        "SOCKS 172.171.83.26:8080",
        "SOCKS 58.186.168.155:1103",
        "SOCKS 58.186.168.155:1110",
        "SOCKS 47.82.65.128:1011",
        "SOCKS 117.236.124.166:3128",
        "SOCKS 171.25.158.95:1080",
        "SOCKS 58.186.168.155:1066",
        "SOCKS 45.43.63.37:10808",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}