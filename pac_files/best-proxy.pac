function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 109.224.242.26:8080",
        "SOCKS 78.188.230.81:3310",
        "SOCKS 185.125.200.80:1090",
        "SOCKS 202.43.165.140:10802",
        "SOCKS 15.235.172.129:1081",
        "SOCKS 81.70.62.145:15163",
        "SOCKS 212.58.132.5:1080",
        "SOCKS 194.163.174.78:1083",
        "SOCKS 203.25.208.163:1100",
        "SOCKS 144.24.171.189:555",
        "SOCKS 203.25.208.163:1145",
        "SOCKS 45.77.37.39:2045",
        "SOCKS 180.167.234.224:1080",
        "SOCKS 45.133.16.88:1080",
        "SOCKS 190.97.226.44:999",
        "SOCKS 109.172.7.42:1080",
        "SOCKS 144.91.121.61:1088",
        "SOCKS 45.229.73.210:999",
        "SOCKS 47.79.33.142:3128",
        "SOCKS 109.199.107.68:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}