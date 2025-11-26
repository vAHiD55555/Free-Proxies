function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 106.52.2.26:1080",
        "SOCKS 98.175.31.222:4145",
        "SOCKS 177.93.45.11:999",
        "SOCKS 185.6.9.176:8072",
        "SOCKS 176.9.238.173:47679",
        "SOCKS 171.238.88.218:1040",
        "SOCKS 5.133.219.4:63434",
        "SOCKS 116.203.139.209:5678",
        "SOCKS 103.174.178.137:1020",
        "SOCKS 184.185.2.45:4145",
        "SOCKS 46.10.229.243:7777",
        "SOCKS 195.93.173.58:9050",
        "SOCKS 172.104.4.144:9050",
        "SOCKS 181.214.39.73:5719",
        "SOCKS 109.238.14.123:52663",
        "SOCKS 171.238.103.65:1081",
        "SOCKS 103.174.178.131:1020",
        "SOCKS 185.226.117.146:8090",
        "SOCKS 152.53.171.242:42047",
        "SOCKS 34.216.224.9:40715",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}