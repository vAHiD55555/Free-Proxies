function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 185.6.9.176:8072",
        "SOCKS 115.127.36.190:1088",
        "SOCKS 115.127.83.142:1088",
        "SOCKS 177.19.167.242:80",
        "SOCKS 69.164.206.96:13024",
        "SOCKS 43.209.130.76:109",
        "SOCKS 152.53.36.101:20077",
        "SOCKS 218.4.192.62:7302",
        "SOCKS 34.216.224.9:40715",
        "SOCKS 181.214.39.72:5719",
        "SOCKS 212.33.248.45:1080",
        "SOCKS 111.61.73.175:7302",
        "SOCKS 192.241.156.17:1080",
        "SOCKS 205.185.120.241:5556",
        "SOCKS 51.38.155.24:46069",
        "SOCKS 181.214.39.73:5719",
        "SOCKS 66.135.227.178:4145",
        "SOCKS 125.141.139.112:5566",
        "SOCKS 125.66.165.154:7302",
        "SOCKS 45.77.156.171:9091",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}