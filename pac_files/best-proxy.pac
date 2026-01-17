function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 121.230.8.142:1080",
        "SOCKS 37.120.162.180:42524",
        "SOCKS 119.81.71.27:8123",
        "SOCKS 80.253.246.238:6618",
        "SOCKS 195.158.8.123:3128",
        "SOCKS 37.120.222.132:3128",
        "SOCKS 37.120.162.180:10084",
        "SOCKS 178.33.162.89:58574",
        "SOCKS 78.12.230.52:10025",
        "SOCKS 43.209.8.12:93",
        "SOCKS 185.236.202.205:3128",
        "SOCKS 181.214.39.51:5719",
        "SOCKS 119.81.189.194:80",
        "SOCKS 89.249.65.191:3128",
        "SOCKS 91.151.88.220:6618",
        "SOCKS 103.126.87.125:8090",
        "SOCKS 207.254.71.62:8088",
        "SOCKS 8.130.90.177:3128",
        "SOCKS 103.85.183.30:4995",
        "SOCKS 104.219.236.127:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}