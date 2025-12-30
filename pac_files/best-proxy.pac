function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 203.175.126.229:8080",
        "SOCKS 98.126.23.24:2846",
        "SOCKS 110.235.240.104:1080",
        "SOCKS 222.129.37.77:57114",
        "SOCKS 5.75.235.252:29679",
        "SOCKS 117.74.65.207:443",
        "SOCKS 185.93.89.176:4240",
        "SOCKS 5.75.235.252:34553",
        "SOCKS 181.214.39.73:5719",
        "SOCKS 181.214.39.72:5719",
        "SOCKS 202.62.50.222:1080",
        "SOCKS 67.43.236.22:30177",
        "SOCKS 51.195.139.95:44648",
        "SOCKS 218.4.192.62:7302",
        "SOCKS 62.133.62.12:1081",
        "SOCKS 34.96.238.40:8080",
        "SOCKS 103.54.57.117:50460",
        "SOCKS 192.169.140.98:45739",
        "SOCKS 212.34.141.109:5555",
        "SOCKS 140.237.14.92:4216",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}