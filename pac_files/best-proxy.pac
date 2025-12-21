function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 203.189.137.127:1080",
        "SOCKS 218.6.105.152:4216",
        "SOCKS 218.78.65.202:6688",
        "SOCKS 172.104.240.74:9053",
        "SOCKS 162.144.74.156:3620",
        "SOCKS 100.27.183.62:8080",
        "SOCKS 146.190.64.18:20202",
        "SOCKS 8.142.3.145:3306",
        "SOCKS 222.129.32.188:57114",
        "SOCKS 144.91.95.238:58237",
        "SOCKS 135.181.203.208:80",
        "SOCKS 128.140.76.145:14954",
        "SOCKS 62.60.151.128:80",
        "SOCKS 98.126.23.24:2846",
        "SOCKS 144.91.78.34:20269",
        "SOCKS 43.224.8.116:6667",
        "SOCKS 220.248.188.75:17211",
        "SOCKS 103.242.175.241:8899",
        "SOCKS 137.184.228.194:40886",
        "SOCKS 54.177.179.230:3128",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}