function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 81.12.119.171:8080",
        "SOCKS 159.8.114.37:80",
        "SOCKS 37.59.110.73:80",
        "SOCKS 72.223.188.67:4145",
        "SOCKS 171.238.90.238:1117",
        "SOCKS 171.238.88.111:1040",
        "SOCKS 120.77.203.0:443",
        "SOCKS 144.91.95.238:58237",
        "SOCKS 47.243.94.125:1080",
        "SOCKS 188.93.213.242:1080",
        "SOCKS 18.188.141.177:1145",
        "SOCKS 181.214.39.72:5719",
        "SOCKS 128.140.76.145:19030",
        "SOCKS 185.123.101.174:3128",
        "SOCKS 167.172.109.12:39452",
        "SOCKS 167.172.109.12:39533",
        "SOCKS 119.81.189.194:8123",
        "SOCKS 72.10.160.94:8911",
        "SOCKS 194.233.78.142:42495",
        "SOCKS 72.221.196.157:35904",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}