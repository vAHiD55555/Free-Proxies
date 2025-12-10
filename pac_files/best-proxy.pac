function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 138.199.25.13:3904",
        "SOCKS 185.244.208.195:23699",
        "SOCKS 15.207.196.77:3128",
        "SOCKS 195.154.43.198:39522",
        "SOCKS 72.10.160.93:7741",
        "SOCKS 205.185.114.78:5556",
        "SOCKS 180.183.97.16:8080",
        "SOCKS 176.74.197.163:36918",
        "SOCKS 185.236.202.170:3128",
        "SOCKS 5.149.203.190:1080",
        "SOCKS 79.122.230.20:8080",
        "SOCKS 61.171.50.169:6688",
        "SOCKS 125.141.139.110:5566",
        "SOCKS 152.53.171.242:22931",
        "SOCKS 84.17.51.240:3128",
        "SOCKS 51.158.172.165:8811",
        "SOCKS 144.91.118.176:3128",
        "SOCKS 34.216.224.9:40715",
        "SOCKS 144.124.227.90:10808",
        "SOCKS 51.15.5.21:60349",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}