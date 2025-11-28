function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 89.169.156.179:8118",
        "SOCKS 152.53.171.242:59305",
        "SOCKS 152.53.171.242:10049",
        "SOCKS 193.216.224.108:8192",
        "SOCKS 123.182.233.70:7302",
        "SOCKS 125.141.139.110:5566",
        "SOCKS 219.147.112.150:1080",
        "SOCKS 218.78.65.202:6688",
        "SOCKS 185.244.208.195:23699",
        "SOCKS 162.144.74.156:3620",
        "SOCKS 152.53.36.101:28283",
        "SOCKS 143.198.202.224:9879",
        "SOCKS 202.5.60.46:1080",
        "SOCKS 103.147.246.77:8199",
        "SOCKS 117.74.65.207:80",
        "SOCKS 125.66.165.154:7302",
        "SOCKS 51.89.68.78:9050",
        "SOCKS 152.53.36.101:18351",
        "SOCKS 185.6.9.176:8072",
        "SOCKS 51.15.223.12:16379",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}