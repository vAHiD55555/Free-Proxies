function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 203.189.156.11:1080",
        "SOCKS 188.93.213.242:1080",
        "SOCKS 195.158.8.123:3128",
        "SOCKS 78.63.115.20:8899",
        "SOCKS 67.43.236.18:18447",
        "SOCKS 62.60.131.179:4047",
        "SOCKS 47.79.40.185:12462",
        "SOCKS 1.180.49.222:7302",
        "SOCKS 62.60.131.193:5448",
        "SOCKS 5.129.214.202:10999",
        "SOCKS 8.142.3.145:3306",
        "SOCKS 170.130.40.150:10999",
        "SOCKS 194.233.78.142:42495",
        "SOCKS 138.124.107.240:10999",
        "SOCKS 185.6.9.176:8072",
        "SOCKS 181.214.39.72:5719",
        "SOCKS 115.127.182.126:2589",
        "SOCKS 51.16.209.246:8080",
        "SOCKS 176.74.192.44:24822",
        "SOCKS 104.206.98.154:3128",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}