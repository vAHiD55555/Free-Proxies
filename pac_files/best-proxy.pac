function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 36.255.98.168:6956",
        "SOCKS 103.174.178.131:1020",
        "SOCKS 173.236.187.104:40355",
        "SOCKS 88.99.10.252:1080",
        "SOCKS 171.249.163.170:1452",
        "SOCKS 13.229.47.109:80",
        "SOCKS 36.255.98.151:13126",
        "SOCKS 170.80.95.254:11211",
        "SOCKS 18.141.177.23:80",
        "SOCKS 36.255.98.184:4149",
        "SOCKS 62.60.131.204:5280",
        "SOCKS 5.133.219.4:63434",
        "SOCKS 116.242.89.230:3128",
        "SOCKS 103.174.178.145:2005",
        "SOCKS 183.236.232.160:8080",
        "SOCKS 110.235.255.252:1080",
        "SOCKS 62.60.131.253:5031",
        "SOCKS 188.132.222.19:8080",
        "SOCKS 78.12.220.164:117",
        "SOCKS 36.255.98.151:15722",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}