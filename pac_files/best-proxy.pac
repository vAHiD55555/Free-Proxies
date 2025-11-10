function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 37.221.193.221:52821",
        "SOCKS 205.185.116.159:5556",
        "SOCKS 181.214.39.51:5719",
        "SOCKS 51.158.105.107:16379",
        "SOCKS 47.237.92.3:1011",
        "SOCKS 1.180.49.222:7302",
        "SOCKS 167.172.253.162:4857",
        "SOCKS 5.183.70.46:1080",
        "SOCKS 152.53.171.242:23543",
        "SOCKS 152.53.171.242:35857",
        "SOCKS 91.209.77.93:3128",
        "SOCKS 65.108.159.129:8081",
        "SOCKS 181.214.39.73:5719",
        "SOCKS 3.107.252.199:45157",
        "SOCKS 152.53.36.101:36965",
        "SOCKS 103.148.112.69:8199",
        "SOCKS 184.185.2.45:4145",
        "SOCKS 37.221.193.221:58941",
        "SOCKS 152.53.171.242:35073",
        "SOCKS 46.10.208.106:8192",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}