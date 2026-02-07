function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 5.255.117.127:1080",
        "SOCKS 141.11.42.163:1080",
        "SOCKS 194.163.182.6:1080",
        "SOCKS 223.27.82.91:1080",
        "SOCKS 203.150.113.29:8080",
        "SOCKS 46.21.153.16:3128",
        "SOCKS 202.62.47.98:1080",
        "SOCKS 125.141.139.110:5566",
        "SOCKS 95.216.17.79:3888",
        "SOCKS 213.131.85.26:1981",
        "SOCKS 84.17.51.240:3128",
        "SOCKS 103.54.57.117:50460",
        "SOCKS 152.53.171.242:19325",
        "SOCKS 85.214.244.174:3128",
        "SOCKS 115.231.181.40:8128",
        "SOCKS 152.53.171.242:16951",
        "SOCKS 213.35.110.67:10808",
        "SOCKS 185.189.112.133:3128",
        "SOCKS 89.22.237.70:80",
        "SOCKS 221.1.104.177:7302",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}