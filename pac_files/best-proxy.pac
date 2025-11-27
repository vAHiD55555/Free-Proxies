function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 43.153.64.222:12280",
        "SOCKS 181.214.39.51:5719",
        "SOCKS 109.245.231.73:8192",
        "SOCKS 152.53.36.101:35877",
        "SOCKS 8.142.3.145:3306",
        "SOCKS 157.180.121.252:34013",
        "SOCKS 152.53.36.101:10061",
        "SOCKS 47.250.56.98:19190",
        "SOCKS 115.127.62.50:1088",
        "SOCKS 152.53.171.242:41517",
        "SOCKS 222.129.32.188:57114",
        "SOCKS 152.53.171.242:44239",
        "SOCKS 38.11.104.49:9000",
        "SOCKS 72.10.160.90:1237",
        "SOCKS 152.53.171.242:10015",
        "SOCKS 206.201.3.83:8095",
        "SOCKS 185.61.38.140:1080",
        "SOCKS 172.104.4.144:9050",
        "SOCKS 152.53.171.242:10017",
        "SOCKS 103.54.57.117:50460",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}