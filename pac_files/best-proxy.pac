function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 103.54.57.117:50460",
        "SOCKS 159.8.114.37:8123",
        "SOCKS 144.91.78.34:20269",
        "SOCKS 195.34.91.67:8080",
        "SOCKS 195.158.8.123:3128",
        "SOCKS 116.242.89.230:3128",
        "SOCKS 37.120.162.180:47686",
        "SOCKS 103.174.178.131:1020",
        "SOCKS 91.213.99.134:3128",
        "SOCKS 152.53.171.242:32067",
        "SOCKS 37.120.162.180:10850",
        "SOCKS 152.53.171.242:17559",
        "SOCKS 164.163.40.1:10000",
        "SOCKS 152.53.171.242:20889",
        "SOCKS 223.113.89.138:1080",
        "SOCKS 78.12.230.52:10025",
        "SOCKS 138.68.60.8:1080",
        "SOCKS 119.81.71.27:8123",
        "SOCKS 152.53.171.242:17295",
        "SOCKS 8.142.3.145:3306",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}