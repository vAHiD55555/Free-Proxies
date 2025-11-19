function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 112.86.116.24:1080",
        "SOCKS 89.58.45.94:26277",
        "SOCKS 205.185.126.51:5556",
        "SOCKS 152.53.171.242:21909",
        "SOCKS 168.253.92.93:10808",
        "SOCKS 203.25.208.163:1011",
        "SOCKS 47.250.56.98:19190",
        "SOCKS 47.242.44.225:1011",
        "SOCKS 98.185.94.76:4145",
        "SOCKS 152.53.171.242:34839",
        "SOCKS 125.141.133.49:5566",
        "SOCKS 98.190.102.62:4145",
        "SOCKS 152.53.36.101:14509",
        "SOCKS 218.4.192.62:7302",
        "SOCKS 181.214.39.73:5719",
        "SOCKS 152.53.171.242:14325",
        "SOCKS 152.53.171.242:10083",
        "SOCKS 78.138.17.50:443",
        "SOCKS 89.58.45.94:38501",
        "SOCKS 51.15.223.12:16379",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}