function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 118.145.141.251:44100",
        "SOCKS 103.58.251.66:1080",
        "SOCKS 152.69.167.87:1080",
        "SOCKS 124.248.177.44:1080",
        "SOCKS 94.73.251.19:1080",
        "SOCKS 109.95.61.203:1080",
        "SOCKS 151.145.63.243:1080",
        "SOCKS 47.252.18.37:1000",
        "SOCKS 94.228.163.46:9050",
        "SOCKS 66.163.118.105:10006",
        "SOCKS 95.163.153.221:1080",
        "SOCKS 137.184.58.163:9050",
        "SOCKS 104.207.139.62:1080",
        "SOCKS 216.106.179.216:49493",
        "SOCKS 117.236.124.166:3128",
        "SOCKS 81.168.119.85:443",
        "SOCKS 202.43.165.140:10802",
        "SOCKS 84.8.248.36:3128",
        "SOCKS 194.163.174.78:1087",
        "SOCKS 14.139.235.82:3128",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}